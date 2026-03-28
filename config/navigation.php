<?php

return [
    'login' => [
        ['title' => 'Dashboard', 'link' => '/admin/dashboard'],
        ['title' => 'Users', 'link' => '/admin/users'],
        ['title' => 'Settings', 'link' => '/admin/settings'],
    ],

    'public' => [
        'nav' => [
            ['title' => 'Home', 'link' => '/'],
            ['title' => 'Subjects', 'link' => '/subjects'],
            ['title' => 'Papers', 'link' => '/papers'],
            ['title' => 'About Us', 'link' => '/about-us'],
            ['title' => 'Demo', 'link' => '/demo'],
        ],
        'subjects' => [
            ['title' => 'Current Affairs', 'link' => '/current-affairs-mcqs'],
            ['title' => 'General Knowledge', 'link' => '/general-knowledge-mcqs'],
            ['title' => 'Everyday Science', 'link' => '/everyday-science-mcqs'],
            ['title' => 'English', 'link' => '/english-mcqs'],
            ['title' => 'All Subjects', 'link' => '/subjects'],
        ],
        'papers' => [
            ['title' => 'Upcoming Papers', 'link' => '/papers/upcoming-papers'],
            ['title' => 'Latest Papers', 'link' => '/papers/latest-papers'],
            ['title' => 'Past Papers', 'link' => '/papers/past-papers'],
            ['title' => 'All Papers', 'link' => '/papers'],
        ],
        'about_us' => [
            ['title' => 'About Us', 'link' => '/about-us'],
            ['title' => 'Contact Us', 'link' => '/contact-us'],
            ['title' => 'Help Center', 'link' => '/help-center'],
            ['title' => 'Privacy Policy', 'link' => '/privacy-policy'],
            ['title' => 'Terms of Service', 'link' => '/terms-of-service'],
            ['title' => 'Join Us', 'link' => '/join-us'],
        ],
    ]
];
