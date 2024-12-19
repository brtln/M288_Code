#!/bin/bash
#
TOOL="../../bin/aprep.sh"
DEST="../02_Exercises/"
"$TOOL" -p "$DEST" -j a01-A.js
"$TOOL" -p "$DEST" -j a02-A.js
"$TOOL" -p "$DEST" -h a03-A.html -j a03-A.js
