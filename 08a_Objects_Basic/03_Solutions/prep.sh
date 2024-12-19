#!/bin/bash
#
TOOL="../../bin/aprep.sh"
DEST="../02_Exercises/"
"$TOOL" -p "$DEST" -j "a01-A.js"
"$TOOL" -p "$DEST" -j "a02-A.js"
"$TOOL" -p "$DEST" -j "a02_test-A.js"
"$TOOL" -p "$DEST" -j "a03-A.mjs"
"$TOOL" -p "$DEST" -j "a03a_test-A.mjs"
"$TOOL" -p "$DEST" -j "a03b_test-A.mjs"
