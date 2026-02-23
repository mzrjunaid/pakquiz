<?php

namespace App\Support\Seo;

class SchemaBuilder
{
    protected array $schema = [];

    public static function make(string $type): self
    {
        $instance = new self();

        $instance->schema = [
            '@context' => 'https://schema.org',
            '@type'    => $type,
        ];

        return $instance;
    }

    public function id(?string $id): self
    {
        if ($id) {
            $this->schema['@id'] = $id;
        }

        return $this;
    }

    public function set(string $key, mixed $value): self
    {
        if ($this->isValid($value)) {
            $this->schema[$key] = $value;
        }

        return $this;
    }

    public function build(): array
    {
        return $this->schema;
    }

    protected function isValid(mixed $value): bool
    {
        if (is_null($value)) return false;
        if (is_string($value) && trim($value) === '') return false;
        if (is_array($value) && empty($value)) return false;

        return true;
    }
}
