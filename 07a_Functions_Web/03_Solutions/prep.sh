#!/bin/bash
#
TOOL="../../bin/aprep.sh"
DEST="../02_Exercises/"
"$TOOL" -p "$DEST" -r a01
"$TOOL" -p "$DEST" -d a01
"$TOOL" -p "$DEST" -h "a01/index-A.html" -j "a01/js/scripts-A.js"
"$TOOL" -p "$DEST" -r "a01/index-A.html"
"$TOOL" -p "$DEST" -r "a01/js/scripts-A.js"
