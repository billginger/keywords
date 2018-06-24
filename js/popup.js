var StorageArea = chrome.storage.local;
var cfg = { enabled: false };
var enabledCheckbox = document.querySelector('#enabled');

// Get config
StorageArea.get(cfg, function(items) {
	if (items.enabled) {
		enabledCheckbox.checked = true;
	}
});

// Set config
enabledCheckbox.onchange = function() {
	cfg.enabled = enabledCheckbox.checked;
	StorageArea.set(cfg, function() {
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, cfg);
		});
	});
}
