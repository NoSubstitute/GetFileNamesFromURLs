# GetFileNamesFromURLs
Get Google File Names From URLs

When I exported my goo.gl short URLs from Google's now deprecated service they didn't include the title of the linked object, so it was impossible to know what it was for. I had to figure out a way to get the titles for my files, and I really didn't want to click them all one by one, find the title, and copy-paste. So I created this little thing from snippets I found by googling how to get information off an file id through Google's APIs.

Start by making sure your Sheet has these seven columns.

ShortUrl	LongUrl	CreationTime	FileId	FileName	Getting names...	Getting file ids...

The first three are included in the goo-gl export, but you can use this script for any list of URLs of Google files (real Google file URLs) you have.
The last two are just indicators, letting you know the script is running, and will contain the character y for each row the script manages to extract the title from. If it fails, it will just go on to the next file and try that instead. The script extracts the file ids from the URLs, so if the URLs don't have a file id, the script can't extract anything.

Then you insert the two .gs file from this repo into the Sheets Script Editor under Tools, and save.

When you reload your sheet, you should now have a tiny menu, to the right of Help, called Update shet, with two options.

1. Get file ids
2. Get file names

Obviously, you need to run 1 before 2. :-)
