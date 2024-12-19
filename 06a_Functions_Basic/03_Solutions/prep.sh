#!/bin/bash
#
TOOL="../../bin/aprep.sh"
DEST="../02_Exercises/"
#"$TOOL" -p "$DEST" -h a03-B.html -j a03-B.js
declare -a scriptArr=('1-A' '2-A' '3-A')
## now loop through the above array
for s in "${scriptArr[@]}"
do
   skript="a0${s}.js"
   echo "Preparing $skript ..."
   "$TOOL" -p "$DEST" -j "$skript"
done
