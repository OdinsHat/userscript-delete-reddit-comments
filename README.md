# Userscript Delete Reddit Comments
<img align="left" src="reddit-clear-logo.png" style="padding:20px" />

A simple userscript for use with [Tampermonkey](https://www.tampermonkey.net) to delete your reddit comments en-masse. TamperMonkey is a continuation of the GreaseMonkey system which is like an extension system within an extension system that allows the creation of simple userscripts for use on certain sites that enable ir disable certain features of a site.

This can be used as an alternative to other solutions that are available. Below is a list of alternatives that have worked well for others.

I made this scipt after finding the other solutions either lacking or they had limits on their use.

## Why Delete Your Comment History?

Since Reddit's change in policies and the comments by current CEO Steve Huffman (aka Spez) many users and moderators have become unhappy with their treatment. As such many people wish to delete any contributions they've made to the site in the years they've been members.

## Other solutions

[Power Delete Suite](https://github.com/j0be/PowerDeleteSuite) - this by far seems the most functional of the tools I've come across. Unfortunately it didn't work for me. Either because my account is suspended which may block some partof it's functionality or some other reason. Knowing JS and having written userscripts before I found it simpler to just build my own script to do it for me. If you want more features such as the ability to replace your comments with promotions to Lemmy or only deleting from certain subs then this would be the tool for you. If it doesn't work though then I'd recommend my simpler solution.

[Nuke Reddit History](https://extpose.com/ext/aclagjkmidmkcdhkhlicmgkgmpgccaod/en) - Now removed from Chromes official extensions site but is available at the link for ex-Chrome extensions.

[Bulk Delete Reddit Posts & Comment History](https://chrome.google.com/webstore/detail/bulk-delete-reddit-posts/nbfdoajmaaohkohdnbpjakamhcaaleco/related) - A functional alternative but only allows deletion of 50 comments per 24hrs unless you pay a fee to delete more than this. You will also require [Reddit Enhancement Suite](https://redditenhancementsuite.com) for this extension to work at all. Overcomplicating what should be a simple process.

## Tips Before Deletion
Before deleting your entire comment history you may wish to consider exporting your Reddit comments and posts. This can be done via the Export Reddit data feature at this URL: https://www.reddit.com/settings/data-request