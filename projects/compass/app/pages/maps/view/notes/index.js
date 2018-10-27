$(document).ready(function() {
    var notes = {
        notes: [
            {
                Name: "Michael Smith",
                Date: "09/23/2017 12:52am",
                Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            {
                Photo: "images/agent-photos/systembot.svg",
                Name: "Compass Bot",
                Date: "09/22/2017 4:34pm",
                Email: true,
                Content: "Email sent by Michael Smith",
            },
            {
                Name: "Michael Smith",
                Date: "09/22/2017 3:12pm",
                Content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
            },
            {
                Photo: "images/agent-photos/jason-wu.jpg",
                Name: "Jason Wu",
                Date: "09/22/2017 3:09pm",
                Content: "Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                Name: "Michael Smith",
                Date: "09/20/2017 12:45pm",
                Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            {
                Photo: "images/agent-photos/lisa-andes.jpg",
                Name: "Lisa Andes",
                Date: "09/20/2017 11:31am",
                Content: "Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                Name: "Michael Smith",
                Date: "08/04/2017 5:02pm",
                Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
        ]
    };

    function renderNotes() {
        $('#notes').html('');

        var notesTemplateScript = $("#notes-template").html();
        var notesTemplate = Handlebars.compile(notesTemplateScript);
        var notesData = notesTemplate(notes);
        $('#notes').append(notesData);
    }

    function addNote(photo, name, date, content) {
        notes.notes.unshift({ Photo: photo, Name: name, Date: date, Content: content });
        return true;
    }

    $('.btn-add-note').click(function() {
        var today = new Date();
        var hours = today.getHours();
        var time = "";

        if (hours === 12) {
            time = hours + ":" +  today.getMinutes() + "PM";
        } else if (hours > 12) {
            time = (hours - 12) + ":" +   today.getMinutes() + "PM";
        } else {
            time = hours + ":" + today.getMinutes() + "AM";
        }
        var timestamp = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear() + " " + time;

        addNote('images/agent-photos/agent-photo-1.jpg', 'Shawn Smith', timestamp, $('.agency-note').val());
        $('.agency-note').val('');
        renderNotes();

    });

    renderNotes();

});