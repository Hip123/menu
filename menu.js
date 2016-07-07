'use strict'
class Menu {
	constructor(options) {
		this.el = options.el;

		this._initEvents();
	}

	_initEvents () {
		this.el.addEventListener('click', this._onMenuClick.bind(this));
		this.el.addEventListener('mouseover',this._onMenuOver.bind(this));
		this.el.addEventListener('mouseout',this._onMenuOut.bind(this));
		

	}


	_onMenuClick (event) {
		let isItemClick = false;
		if (event.target.classList.contains('menu__item') || event.target.classList.contains('button')) {
			isItemClick = true;
			this._onMenuItemClick(event);
		}

		if (!isItemClick) {
			this.el.classList.toggle('menu_open');
		}
		if (event.target.classList.contains('button')) {
			event.target.parentNode.style.display = "none";
		}

	}
	_onMenuOver(event) {
	if (event.target.classList.contains('menu__item')) {
		event.target.style.background = "green";
		event.target.children[0].style.display = "block";

	}
	}
	_onMenuOut (event) {
		if (event.target.classList.contains('menu__item')) {
			event.target.style.background = "";
			event.target.children[0].style.display = "none";
		}
	}

	_onMenuItemClick (event) {
		console.log(event.target);
	}

}
