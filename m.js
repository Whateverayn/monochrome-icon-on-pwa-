let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
//   installButton.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById('install_d').dataset.sw = 'install';
    }, 2000);
});
installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    installPrompt = null;
    // installButton.setAttribute("hidden", "");
    document.getElementById('install_d').dataset.sw = 'e';
  });
  