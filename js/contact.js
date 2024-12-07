$(document).ready(function() {

            (function($) {
                "use strict";


                jQuery.validator.addMethod('answercheck', function(value, element) {
                    return this.optional(element) || /^\bcat\b$/.test(value)
                }, "type the correct answer -_-");

                // validate contactForm form
                $(function() {
                    $('#contactForm').validate({
                        rules: {
                            name: {
                                required: true,
                                minlength: 3
                            },
                            subject: {
                                required: true,
                                minlength: 4
                            },
                            number: {
                                required: false,
                                minlength: 0
                            },
                            email: {
                                required: true,
                                email: true
                            },
                            message: {
                                required: true,
                                minlength: 10
                            }
                        },
                        messages: {
                            name: {
                                required: "Come on, you have a name, don't you?",
                                minlength: "Your name must consist of at least 2 characters"
                            },
                            subject: {
                                required: "Come on, you have a subject, don't you?",
                                minlength: "Your subject must consist of at least 4 characters"
                            },
                            number: {
                                required: "Come on, you have a number, don't you?",
                                minlength: "Your Number must consist of at least 5 characters"
                            },
                            email: {
                                required: "No email, No message"
                            },
                            message: {
                                required: "Um...yea, you have to write something to send this form.",
                                minlength: "That's all? Really?"
                            }
                        },
                        submitHandler: function(form) {
                            var templateParams = {
                                from_name: document.getElementById('name').value,
                                to_name: 'Kartheek',
                                e_mail: document.getElementById('email').value,
                                subject: document.getElementById('subject').value,
                                message: document.getElementById('message').value
                            };
                            emailjs.send('default_service', 'template_U6fzFHHA', templateParams, 'user_cKKXgzXpiN2VGrdptr7Bb')
                                .then(function(response) {
                                        console.log('Request succeeded with JSON response', data);
                                        $('#contactForm :input').attr('disabled', 'disabled');
                                        $('#contactForm').fadeTo("slow", 1, function() {
                                            $(this).find(':input').attr('disabled', 'disabled');
                                            $(this).find('label').css('cursor', 'default');
                                            $('#success').fadeIn()
                                            $('.modal').modal('hide');
                                            $('#success').modal('show');
                                        }, function(error) {
                                            console.log('Request failed', error);
                                            $('#contactForm').fadeTo("slow", 1, function() {
                                                $('#error').fadeIn()
                                                $('.modal').modal('hide');
                                                $('#error').modal('show');
                                            })

                                        });

                                    }
                                })
                    })

                })(jQuery)
            })