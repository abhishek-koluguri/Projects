config.action_mailer.delivery_method = :test

config.action_mailer.smtp_settings = {
    address:              'smtp.gmail.com',
    port:                 587,
    user_name:            'sdp.agilelearner@gmail.com',
    password:             'sdp@1234',
    authentication:       'plain',
    enable_starttls_auto: true,
    ssl: true
}

config.action_mailer.smtp_settings = {
    :address => 'post-office.uh.edu',
    :port => 25,
    :domain => 'cs.uh.edu'
}