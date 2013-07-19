tootles
==
#### a [PagerDuty](http://www.pagerduty.com) incident webhook consumer. Not supported or maintained by PagerDuty.

> Because all of the better character names from _Hook_ were taken.

#### Configuration to run this locally or behind a firewall

It's gotten much easier with the service [ngrok](https://ngrok.com/), which allows you to easily create local tunnels. You'll want to have `ngrok` create a tunnel to port `7388` like so: `./ngrok 7388`.

#### How to create a PagerDuty webhook

See [the PagerDuty webhook documentation](http://developer.pagerduty.com/documentation/rest/webhooks).

Webhooks (if enabled on your PagerDuty account), can be added on the services page:

![PagerDuty Services Page with Webhooks Enabled](https://www.evernote.com/shard/s302/sh/28ac7056-b8ae-489c-9fc4-56386497b477/01bba2bd8da2e25a3c6098f372db87d3/res/cfd6e2a1-4031-496e-b51f-32bd489c0555/skitch.png?resizeSmall&width=832)

If you created an `ngrok` tunnel, the webhook endpoint URL look be something like this: `http://4bz8bb8a.ngrok.com/pd-webhook`

Don't forget to include the path `/pd-webhook`!

### Usage (and UNIX magic)

To start the server on port `7388`:

``
sh $ npm start
``

To start the server and print out a summary of every webhook incident message to STDOUT:

``
sh $ node index.js -o summary
``

To start the server and speak aloud (on Macs) a summary of every webhook incident message:

``
sh $ node index.js -o summary | xargs -L 1 say
``

If you have a recent version Mac OS and would prefer a British English voice (needs to be installed):

``
sh $ node index.js -o summary | xargs -L 1 say -v Daniel
``

### Help

``
sh $ node tootles --help
``
### Inspiration

* [smee](https://github.com/tcr/smee) A more general-purpose zero configuration webhook client.
