tootles: a [PagerDuty](http://www.pagerduty.com) incident webhook consumer.
==

#### "Because all of the better character names from _Hook_ were taken.""

#### Configuration to run this locally or behind a firewall

`localtunnel` is a Python package lets makes your local machine available on the internet.

If you are on Mac OS X, you can just run `pip install localtunnel`. XCode Developer Tools are required.

Next, start localtunnel on a port number that you're going to run tootles on (default: `7388`):

``sh
sh $ localtunnel-beta 7388
``

Localtunnel will return a URL that you can use as a PagerDuty webhook.

### #How to create a PagerDuty webhook

See [the PagerDuty webhook documentation](http://developer.pagerduty.com/documentation/rest/webhooks).

### Usage (and UNIX magic)

To start the server on port `7388`:

``
sh $ npm start
``

To start the server and print out a summary of every webhook incident message to STDOUT:

``
sh $ tootles -o summary |
``

To start the server and speak aloud (on Macs) a summary of every webhook incident message:

``
sh $ tootles -o summary | xargs -L 1 say
``

### Help

``
sh $ node tootles --help
``
### Inspiration

* [smee](https://github.com/tcr/smee) A more general-purpose zero configuration webhook client.