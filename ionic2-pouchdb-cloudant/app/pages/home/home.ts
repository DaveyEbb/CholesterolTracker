import {Page} from 'ionic-angular';
import {Data} from '../../providers/data/data';

@Page({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	static get parameters() {
		return [[Data]];
	}

	constructor(dataService) {
		this.dataService = dataService;
		this.items = [];

		this.dataService.getDocuments().then((result) => {
			this.items = result;
		});
	}

	addData() {

		let date = new Date();

		let newDoc = {
			'_id': date,
			'message': date.getTime()
		};

		this.dataService.addDocument(newDoc);
	}

}