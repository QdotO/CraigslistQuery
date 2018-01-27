if [ -f /Users/Q/Google\ Drive/nodeStuff/craiglist/craigslist.zip ]; then
    rm /Users/Q/Google\ Drive/nodeStuff/craiglist/craigslist.zip
    echo "Removed old zip..."
fi
echo "Zipping files now..."
zip -r -1 -u -q craigslist.zip *
echo "Updating Lambda Function..."
aws lambda update-function-code --function-name CraigslistQuery --zip-file fileb:///Users/Q/Google\ Drive/nodeStuff/craiglist/craigslist.zip
