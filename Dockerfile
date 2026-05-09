FROM php:8.2-fpm AS fpm
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_sqlite mbstring xml ctype \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY composer.json composer.lock ./
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    composer install --no-dev --optimize-autoloader

COPY . .
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache

FROM php:8.2-fpm
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    sqlite3 \
    nginx \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_sqlite mbstring xml ctype \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=fpm /app /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/run/php-fpm && \
    mkdir -p /var/log/nginx && \
    touch /var/run/php-fpm/php-fpm.sock

EXPOSE 80

CMD php-fpm -D && nginx -g "daemon off;"
