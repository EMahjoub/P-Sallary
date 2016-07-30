﻿define(['app'], function (app) {
    app.service("pn.errorHandler",['Notification', function (notify) {
        function showError(result) {
		//Aditional Error With Validation Erros.
                if (result.ErrorMessage != null) {
                    notify.error({ message: result.ErrorMessage, title: 'خطا'});
                };

                var validationErrors = "<ul>";

                if(result.ValidationErrors!=null)
                {
                for (var i = 0; i < result.ValidationErrors.length; i++) {
                    if (result.ValidationErrors[i] != null && result.ValidationErrors[i].ErrorMessage != null) {
                        validationErrors += "<li>" + result.ValidationErrors[i].ErrorMessage + "</li>";
                    }
                }
                validationErrors += "</ul>";
                notify.error({ message: validationErrors, title:'خطا' });
                }
        }
        return {
            ShowError: showError
        };
		}]);
});