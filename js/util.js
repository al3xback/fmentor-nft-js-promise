const createElementAttribute = (name, value) => {
	return {
		name,
		value,
	};
};

const createElement = (tag, className, text, attributes) => {
	const newElement = document.createElement(tag);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';
	if (attributes && attributes.length > 0) {
		for (const attr of attributes) {
			newElement.setAttribute(attr.name, attr.value);
		}
	}
	return newElement;
};

const createHeaderEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else {
			const headerEl = createElement('header');

			const headerTitleEl = createElement(
				'h1',
				'sr-only',
				'NFT preview card component'
			);

			headerEl.appendChild(headerTitleEl);

			resolve(headerEl);
		}
	});
};

const createCardEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else if (typeof createElementAttribute === 'undefined') {
			reject(new Error('createElementAttribute is not defined!'));
		} else {
			const cardEl = createElement('article', 'card');

			/* card image */
			const cardImageWrapperEl = createElement('div', 'card__image');

			const cardImageEl = createElement('img', null, null, [
				createElementAttribute('src', './images/equilibrium.jpg'),
				createElementAttribute('alt', 'Equilibrium'),
				createElementAttribute('width', 302),
				createElementAttribute('height', 302),
			]);

			cardImageWrapperEl.appendChild(cardImageEl);

			/* card content */
			const cardContentEl = createElement('div', 'card__content');

			/* card title */
			const cardTitleEl = createElement('h2', 'card__title');

			const cardTitleLinkEl = createElement(
				'a',
				'btn btn--link',
				'Equilibrium #3429',
				[createElementAttribute('href', '#')]
			);

			cardTitleEl.appendChild(cardTitleLinkEl);

			/* card description */
			const cardDescriptionEl = createElement(
				'p',
				'card__desc',
				'Our Equilibrium collection promotes balance and calm.'
			);

			/* card statuses */
			const cardStatusListEl = createElement('ul', 'card__stats-list');

			const cardStatuses = [
				{ icon: 'icon-ethereum', value: '0.041 ETH' },
				{ icon: 'icon-clock', value: '3 days left' },
			];

			for (const status of cardStatuses) {
				const cardStatusItemEl = createElement(
					'li',
					'card__stats-list-item'
				);

				const cardStatusItemIconEl = createElement('i', status.icon);
				cardStatusItemIconEl.ariaHidden = 'true';

				const cardStatusItemTextEl = createElement(
					'span',
					null,
					status.value
				);

				cardStatusItemEl.appendChild(cardStatusItemIconEl);
				cardStatusItemEl.appendChild(cardStatusItemTextEl);

				cardStatusListEl.appendChild(cardStatusItemEl);
			}

			/* card author */
			const cardAuthorEl = createElement('div', 'card__author');

			const cardAuthorImageEl = createElement(
				'img',
				'card__author-img',
				null,
				[
					createElementAttribute('src', './images/avatar.png'),
					createElementAttribute('alt', 'Jules Wyvern'),
					createElementAttribute('width', 33),
					createElementAttribute('height', 33),
				]
			);

			const cardAuthorDescriptionEl = createElement(
				'span',
				'card__author-desc',
				'Creation of '
			);

			const cardAuthorDescriptionLinkEl = createElement(
				'a',
				'btn btn--link',
				'Jules Wyvern',
				[createElementAttribute('href', '#')]
			);

			cardAuthorDescriptionEl.appendChild(cardAuthorDescriptionLinkEl);

			cardAuthorEl.appendChild(cardAuthorImageEl);
			cardAuthorEl.appendChild(cardAuthorDescriptionEl);

			cardContentEl.appendChild(cardTitleEl);
			cardContentEl.appendChild(cardDescriptionEl);
			cardContentEl.appendChild(cardStatusListEl);
			cardContentEl.appendChild(cardAuthorEl);

			cardEl.appendChild(cardImageWrapperEl);
			cardEl.appendChild(cardContentEl);

			resolve(cardEl);
		}
	});
};

const createMainEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else {
			const mainEl = createElement('main');

			const mainContainerEl = createElement('div', 'container');

			createCardEl()
				.then((el) => {
					mainContainerEl.appendChild(el);

					mainEl.appendChild(mainContainerEl);

					resolve(mainEl);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

const createFooterEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else if (typeof createElementAttribute === 'undefined') {
			reject(new Error('createElementAttribute is not defined!'));
		} else {
			const footerEl = createElement('footer');

			const footerContainerEl = createElement('div', 'container');

			const footerTextEl = createElement('p', null, 'Challenge by ');

			const footerTextLinkCreatorEl = createElement(
				'a',
				'btn btn--link',
				'Frontend Mentor',
				[
					createElementAttribute(
						'href',
						'https://www.frontendmentor.io?ref=challenge'
					),
					createElementAttribute('rel', 'noopener'),
					createElementAttribute('target', '_blank'),
				]
			);

			const footerTextLinkCoderEl = createElement(
				'a',
				'btn btn--link',
				'al3xback',
				[
					createElementAttribute(
						'href',
						'https://github.com/al3xback'
					),
					createElementAttribute('rel', 'noopener'),
					createElementAttribute('target', '_blank'),
				]
			);

			footerTextEl.appendChild(footerTextLinkCreatorEl);
			footerTextEl.append('. Coded by ');
			footerTextEl.appendChild(footerTextLinkCoderEl);

			footerContainerEl.appendChild(footerTextEl);

			footerEl.appendChild(footerContainerEl);

			resolve(footerEl);
		}
	});
};

export { createHeaderEl, createMainEl, createFooterEl };
