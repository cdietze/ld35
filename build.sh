#!/bin/bash
set -e
git rm -rf --ignore-unmatch quads index.html favicon.ico
git clone https://github.com/cdietze/quads.git build
mvn -f build/pom.xml -Phtml package
cp -rv build/html/target/quads-html-1.0-SNAPSHOT/ .
rm -rf META-INF WEB-INF
rm -rf build
git add .
git commit -a -m "Rebuilt HTML project"
