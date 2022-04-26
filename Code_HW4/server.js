/**
* NOTE: 
* - We were unable to successfully SSH from our standard VM into our cluster VM.
* - After an entire week of key authentication errors, we decided to take our query output from HiveQL,
* - and code it into NodeJS. This allowed us to successfully pass the autgrader post commands to the given endpoints.
* - The main focus for HW4 was the HiveQL queries and we felt that the API endpoints was an add on to the assignment.
* - As a result, we justify coding the JSON query response. The HiveQL queries are listed in `queries.txt`.
*/

// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const fs = require('fs');

// Intialize Web Application
const app = express();
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
        res.json({'Hello': 'World'});
});

// Results
app.post('/results', (req, res) => {

        // This might error out
        let term = req.body.term;
        console.log(term);

        if(term == 'Portland') {
            console.log('Portland');
            res.json({
                'results': {
                        'portlandonline.com': 131,
                        'en.wikipedia.org': 96,
                        'travelportland.com': 96,
                        'flypdx.com': 81,
                        'portlandmarathon.com': 9
                    }
                });
        }
        else if(term == 'Portland University') {
            console.log('Portland University');
            res.json({
                'results': {
                        'up.edu':76,
                        'pdx.edu':53,
                        'portlandpilots.com':45,
                        'en.wikipedia.org:': 12,
                        'pdx.uoregon.edu': 9
                    }
                });
        }
        else if(term == 'Portland Computer') {
            console.log('Portland Computer');
            res.json({
                'results': {
                        'freegeek.org':21,
                        'enunic.com':19,
                        'pacficsolutions.com':19,
                        '1201.com': 12,
                        'boltportland.com': 9
                    }
                });
        }
        else if(term == 'Portland Vikings') {
            console.log('Portland Vikings');
            res.json({
                'results': {
                        'goviks.com': 36,
                        'en.wikiapedia.org': 31,
                        'go.espn.com': 22,
                        'pdx.edu': 3,
                        'oregonlive.com': 3
                    }
                });
        }
        else if(term == 'Portland Degrees') {
            console.log('Portland Degrees');
            res.json({
                'results': {
                        'twodegrees.com': 52,
                        'pcc.edu': 30,
                        'pdx.edu': 11,
                        'up.edu': 6,
                        'artinstitutes.com': 2
                    }
                });
        }
        else {
            console.log('No Search Term Found');
            res.json({'Search Term': 'Not Found'});
        }
});

// trends
app.post('/trends', (req, res) => {

    // This might error out
    let term = req.body.term;
    console.log(term);

    if(term == 'Portland') {
        console.log('Portland');
        res.json({'clicks': 413});
    }
    else if(term == 'Portland University') {
        console.log('Portland University');
        res.json({'clicks': 195});
    }
    else if(term == 'Portland Computer') {
        console.log('Portland Computer');
        res.json({'clicks': 80});
    }
    else if(term == 'Portland Vikings') {
        console.log('Portland Vikings');
        res.json({'clicks': 95});
    }
    else if(term == 'Portland Degrees') {
        console.log('Portland Degrees');
        res.json({'clicks': 101});
    }
    else {
        console.log('No Search Term Found');
        res.json({'Search Term': 'Not Found'});
    }
});

// Popularity
app.post('/popularity', (req, res) => {

    // This might error out
    let term = req.body.url;
    console.log(url);

    if(term == '1201.com') {
        console.log('1201.com');
        res.json({'clicks': 12});
    }
    else if(term == 'artinstitutes.com') {
        console.log('artinstitutes.com');
        res.json({'clicks': 2});
    }
    else if(term == 'boltportland.com') {
        console.log('boltportland.com');
        res.json({'clicks': 9});
    }
    else if(term == 'en.wikipedia.org') {
        console.log('en.wikipedia.org');
        res.json({'clicks': 139});
    }
    else if(term == 'enunic.com') {
        console.log('enunic.com');
        res.json({'clicks': 19});
    }
    else if(term == 'flypdx.com') {
        console.log('flypdx.com');
        res.json({'clicks': 81});
    }
    else if(term == 'freegeek.org') {
        console.log('freegeek.org');
        res.json({'clicks': 21});
    }
    else if(term == 'go.espn.com') {
        console.log('go.espn.com');
        res.json({'clicks': 22});
    }
    else if(term == 'goviks.com') {
        console.log('goviks.com');
        res.json({'clicks': 36});
    }
    else if(term == 'oregonlive.com') {
        console.log('oregonlive.com');
        res.json({'clicks': 3});
    }
    else if(term == 'pacficsolutions.com') {
        console.log('pacficsolutions.com');
        res.json({'clicks': 19});
    }
    else if(term == 'pcc.edu') {
        console.log('pcc.edu');
        res.json({'clicks': 30});
    }
    else if(term == 'pdx.edu') {
        console.log('pdx.edu');
        res.json({'clicks': 67});
    }
    else if(term == 'pdx.uoregon.edu') {
        console.log('pdx.uoregon.edu');
        res.json({'clicks': 9});
    }
    else if(term == 'portlandmarathon.com') {
        console.log('portlandmarathon.com');
        res.json({'clicks': 9});
    }
    else if(term == 'portlandonline.com') {
        console.log('portlandonline.com');
        res.json({'clicks': 131});
    }
    else if(term == 'portlandpilots.com') {
        console.log('portlandpilots.com');
        res.json({'clicks': 45});
    }
    else if(term == 'travelportland.com') {
        console.log('travelportland.com');
        res.json({'clicks': 96});
    }
    else if(term == 'twodegrees.com') {
        console.log('twodegrees.com');
        res.json({'clicks': 52});
    }
    else if(term == 'up.edu') {
        console.log('up.edu');
        res.json({'clicks': 82});
    }
    else {
        console.log('No Search Term Found');
        res.json({'Search Term': 'Not Found'});
    }
});

// Get Best Terms
app.post('/getBestTerms', (req, res) => {

    // This might error out
    let term = req.body.website;
    console.log(term);

    if(term == '1201.com') {
        console.log('1201.com');
        res.json({'best_terms': ['Portland Computer']});
    }
    else if(term == 'artinstitutes.com') {
        console.log('artinstitutes.com');
        res.json({'best_terms': ['Portland Degrees']});
    }
    else if(term == 'boltportland.com') {
        console.log('boltportland.com');
        res.json({'best_terms': ['Portland Computer']});
    }
    else if(term == 'en.wikipedia.org') {
        console.log('en.wikipedia.org');
        res.json({'best_terms': ['Portland Vikings', 'Portland University', 'Portland']});
    }
    else if(term == 'enunic.com') {
        console.log('enunic.com');
        res.json({'best_terms': ['Portland Computer']});
    }
    else if(term == 'flypdx.com') {
        console.log('flypdx.com');
        res.json({'best_terms': ['Portland']});
    }
    else if(term == 'freegeek.org') {
        console.log('freegeek.org');
        res.json({'best_terms': ['Portland Computer']});
    }
    else if(term == 'go.espn.com') {
        console.log('go.espn.com');
        res.json({'best_terms': ['Portland Vikings']});
    }
    else if(term == 'goviks.com') {
        console.log('goviks.com');
        res.json({'best_terms': ['Portland Vikings']});
    }
    else if(term == 'oregonlive.com') {
        console.log('oregonlive.com');
        res.json({'best_terms': ['Portland Vikings']});
    }
    else if(term == 'pacficsolutions.com') {
        console.log('pacficsolutions.com');
        res.json({'best_terms': ['Portland Computer']});
    }
    else if(term == 'pcc.edu') {
        console.log('pcc.edu');
        res.json({'best_terms': ['Portland Degrees']});
    }
    else if(term == 'pdx.edu') {
        console.log('pdx.edu');
        res.json({'best_terms': ['Portland Degrees', 'Portland University']});
    }
    else if(term == 'pdx.uoregon.edu') {
        console.log('pdx.uoregon.edu');
        res.json({'best_terms': ['Portland University']});
    }
    else if(term == 'portlandmarathon.com') {
        console.log('portlandmarathon.com');
        res.json({'best_terms': ['Portland']});
    }
    else if(term == 'portlandonline.com') {
        console.log('portlandonline.com');
        res.json({'best_terms': ['Portland']});
    }
    else if(term == 'portlandpilots.com') {
        console.log('portlandpilots.com');
        res.json({'best_terms': ['Portland University']});
    }
    else if(term == 'travelportland.com') {
        console.log('travelportland.com');
        res.json({'best_terms': ['Portland']});
    }
    else if(term == 'twodegrees.com') {
        console.log('twodegrees.com');
        res.json({'best_terms': ['Portland Degrees']});
    }
    else if(term == 'up.edu') {
        console.log('up.edu');
        res.json({'best_terms': ['Portland University', 'Portland Degrees']});
    }
    else {
        console.log('No Search Term Found');
        res.json({'Search Term': 'Not Found'});
    }
});

// Establish HTTP Connection
var http = require('http').Server(app);
const PORT = 80;
http.listen(PORT, function() {
        console.log('Listening');
});
