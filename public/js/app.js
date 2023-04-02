$(function(){
    // signupForm
    if($('#signupForm').length){
        $("#signupForm").validate({
            rules: {
                name: {
                    required: true,
                },
                username: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                },
                password_confirmation: {
                    required: true,
                },
            }
        });
    }

    // loginForm
    if($('#loginForm').length){
        $("#loginForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                }
            }
        });
    }

    // forgotForm
    if($('#forgotForm').length){
        $("#forgotForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                }
            }
        });
    }

    // resetForm
    if($('#resetForm').length){
        $("#resetForm").validate({
            rules: {
                password: {
                    required: true,
                },
                password_confirmation: {
                    required: true,
                },
            }
        });
    }

    if($('#createTaskForm').length){
        $("#createTaskForm").validate({
            rules: {
                title: {
                    required: true,
                },
                description: {
                    required: true,
                },
                category: {
                    required: true,
                },
                due_date: {
                    required: true,
                },
            }
        });
    }
});