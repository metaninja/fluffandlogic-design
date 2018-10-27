$(document).ready(function() {
    var users = {
        users: [
            {
                Name: "Alonzo Sanders",
                Username: "alonzosanders",
                Role: "Admin",
                Active: true,
                Modified: "12/15/2017 12:32pm"
            },
            {
                Name: "Beatrice Lane",
                Username: "beatricelane",
                Role: "CSR",
                Active: true,
                Modified: "12/15/2017 12:40pm"
            },
            {
                Name: "Lori Sanchez",
                Username: "lorsanchez",
                Role: "Producer",
                Active: true,
                Modified: "12/15/2017 12:55pm"
            },
            {
                Name: "Jason Mendoza",
                Username: "jasonmendoza",
                Role: "Producer",
                Active: true,
                Modified: "12/15/2017 1:03pm"
            },
            {
                Name: "Abby Normal",
                Username: "abbynormal",
                Role: "CSR",
                Active: true,
                Modified: "12/15/2017 1:12pm"
            },
            {
                Name: "Marcus Brody",
                Username: "marcusbrody",
                Role: "Producer",
                Active: true,
                Modified: "12/15/2017 1:16pm"
            },


        ]
    };

    var usersTemplateScript = $("#users-template").html();
    var usersTemplate = Handlebars.compile(usersTemplateScript);
    var usersData = usersTemplate(users);
    $('#users').html(usersData);
});