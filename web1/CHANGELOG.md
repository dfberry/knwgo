* 0.0.4
    * Fix: GitHub action working dir for build artifact

* 0.0.3 (2022-12-27)
    * fix: don't add node_modules to build artifact b/c it exceeds file limit and isn't necessary

* 0.0.2 (2022-12-27)
    * change: allow for cosmos db style connection string to mongodb

* 0.0.1 (2022-12-27) 
    * fix: global tear down so test doesn't fail on open mongo connection
    * fix: ts mongoose connection option type
    * fix: lint/prettier changes