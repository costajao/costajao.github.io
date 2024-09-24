let CLIENT_ID = 'costajao@calendar-costajao.iam.gserviceaccount.com';
let API_KEY = 'AIzaSyCmk1mcTI-1Q0qPJe8PVTYmhrHExqL4AKg';
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
let SCOPES = "https://www.googleapis.com/auth/calendar.events";

function handleClientLoad() {
gapi.load('client:auth2', initClient);
}

function initClient() {
gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
}).then(function () {
    // Initialize and make the API call
    gapi.auth2.getAuthInstance().signIn().then(function () {
    listUpcomingEvents();
    });
});
}

function listUpcomingEvents() {
gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
}).then(function(response) {
    const events = response.result.items;
    if (events.length > 0) {
    let availableTimes = "";
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const when = event.start.dateTime || event.start.date;
        availableTimes += `<li>${when}</li>`;
    }
    document.getElementById('available-times').innerHTML = availableTimes;
    } else {
    document.getElementById('available-times').innerHTML = 'No upcoming events found.';
    }
});
}


function scheduleMeeting(startDateTime, endDateTime) {
    const event = {
      'summary': 'Consultoria Financeira',
      'location': 'Online - Google Meet',
      'description': 'Sessão de consultoria financeira.',
      'start': {
        'dateTime': startDateTime,
        'timeZone': 'America/Sao_Paulo'
      },
      'end': {
        'dateTime': endDateTime,
        'timeZone': 'America/Sao_Paulo'
      },
      'attendees': [
        {'email': 'cliente@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }
    };
  
    const request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
  
    request.execute(function(event) {
      alert('Evento criado: ' + event.htmlLink);
    });
  }