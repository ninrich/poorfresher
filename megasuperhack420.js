let articleHead = document.getElementsByClassName("Article-Head")[0];
// execute this code only on pages with articleHead, ergo on article pages
if (articleHead)
{
	let darkColor, lightColor;
	let darkMode = document.getElementsByTagName("body")[0].classList.contains("dark");
	let switches = document.getElementsByClassName("Header-Theme-Switch");

	// iff the article is locked, it contains <div class="lock hard">
	if (document.getElementsByClassName("hard")[0])
	{
		darkColor = "#3c0000";
		lightColor = "#ffc8c8";
	}
	else
	{
		// some free articles have a portion of their code soft locked behind a button click.
		// the following lines unlock them automatically.
		let lockedContent = document.getElementsByClassName("locked-content")[0];
		if (lockedContent)
		{
			lockedContent.classList.remove("locked-content");
			let bloat = document.querySelectorAll('[class^="lock"]');
			bloat.forEach(function(element){
				element.outerHTML = "";
			});
		}
		darkColor = "#002800";
		lightColor = "#c8f6c8";
	}

	// there are two dark/light mode switches. this event listener ensures articleHead's background 
	// has correct color even if the mode is switched by the user
	for (let switchh of switches) {
			switchh.addEventListener("click", changeMode);
	}

	// change the color when the script loads
	changeArticleHeadBackgroundColor()
	
	function changeArticleHeadBackgroundColor() {
		if (darkMode)
			articleHead.style.backgroundColor = darkColor;
		else
			articleHead.style.backgroundColor = lightColor;
	}

	function changeMode(){
		darkMode = !darkMode;
		changeArticleHeadBackgroundColor();
	}
}