requirejs.config({
  baseUrl: 'js/',
});

requirejs(['filer', 'console', 'text!loader.json'], function(Filer, Console, conf) {
  var fs;
  var sh;

  function launch() {
    console.log(conf);
  }

  function load() {
    fs = new Filer.FileSystem({
      provider: new Filer.FileSystem.providers.Fallback(),
    }, fs_ready);

    function fs_ready(err) {
      if(err) throw err;

      sh = new fs.Shell();
      launch();
    }
  }


  if('complete' !== document.readyState) {
    addEventListener('DOMContentLoaded', load, false);
    return;
  } else {
    setTimeout(load, 0);
  }
});