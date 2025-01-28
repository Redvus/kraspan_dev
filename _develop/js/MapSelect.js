class MapSelect {
	constructor(parameters) {
		this.initLayout();
		this.initSelect();
	}

	initLayout() {
		this.mapSelectDistrict = document.querySelectorAll('.footer__top_map_svg');
		this.mapSelectSamara = document.getElementById('footerMapSamara');
	}

	initSelect() {
		for (let i = 0; i < this.mapSelectDistrict.length; i++) {
			this.mapSelectDistrict[i].addEventListener('mouseover', () => {
				this.mapSelectDistrict.forEach((el) => {
					if (el != this.mapSelectDistrict[i]) {
						el.classList = 'footer__top_map_svg footer__top_map_svg--hidden';
					}
				});
			});

			this.mapSelectDistrict[i].addEventListener('mouseleave', () => {
				this.mapSelectDistrict.forEach((el) => {
					if (el != this.mapSelectDistrict[i]) {
						el.classList = 'footer__top_map_svg';
					}
				});
			});
		}
	}
}