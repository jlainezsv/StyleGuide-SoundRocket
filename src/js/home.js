const home = () => ( {
	user: {
		type: "Admin",
		permissions: [ "licenses", "keys" ]
	},

	licenses: [
		{
			product: "Individual",
			expiration: "6/1/22",
			status: "Closed",
			keys: 25,
			purchaser: "Nick Fury",
			proxy: "Tony Stark",
			isAlert: true
		},
		{
			product: "Individual",
			expiration: "7/1/22",
			status: "Open",
			keys: 50,
			purchaser: "Nick Fury",
			proxy: "Tony Stark",
			isAlert: false
		},
		{
			product: "Team",
			expiration: "6/1/22",
			status: "Open",
			keys: 50,
			purchaser: "Nick Fury",
			proxy: "Tony Stark",
			isAlert: true
		},
		{
			product: "Team 360",
			expiration: "8/1/22",
			status: "Closed",
			keys: 100,
			purchaser: "Nick Fury",
			proxy: "Tony Stark",
			isAlert: false
		},
		{
			product: "Team 360",
			expiration: "9/1/22",
			status: "Closed",
			keys: 100,
			purchaser: "Nick Fury",
			proxy: "Tony Stark",
			isAlert: true
		}
	],

	keys: [
		{
			product: "Individual",
			purchaser: "Nick Fury",
			isAddOn: true,
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "",
			isAlert: false
		},
		{
			product: "Individual",
			purchaser: "Alexander Pierce",
			isAddOn: false,
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "",
			isAlert: true
		},
		{
			product: "Individual",
			purchaser: "Justin Hammer",
			isAddOn: true,
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "",
			isAlert: false
		},
		{
			product: "Individual",
			purchaser: "Maria Hill",
			isAddOn: false,
			disposition: "Closed",
			date: "1/1/22",
			expiration: "",
			isAlert: true
		},
		{
			product: "Team",
			purchaser: "Nick Fury",
			isAddOn: true,
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "",
			isAlert: false
		},
		{
			product: "Team",
			purchaser: "Maria Hill",
			isAddOn: false,
			disposition: "Closed",
			date: "1/1/22",
			expiration: "",
			isAlert: true
		},
		{
			product: "Evaluations",
			purchaser: "Nick Fury",
			relationship: "Peer",
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "6/1/22"
		},
		{
			product: "Evaluations",
			purchaser: "Nick Fury",
			relationship: "Peer",
			disposition: "Assigned",
			date: "1/1/22",
			expiration: "6/1/22"
		}
	],

	/** Verifies if the user is an admin */
	isAdmin: function () {
		return this.user.type.toLowerCase().includes( "admin" );
	},

	/** Checks permission */
	hasPermission: function ( entity ) {
		return this.isAdmin() || this.user.permissions.some( permission => permission.toLowerCase().includes( entity.trim().toLowerCase() ) );
	},

	/** Gets the keys of the properties in order to have headers */
	getHeaders: function ( entity ) {
		entity = entity.trim().toLowerCase();

		if ( entity in this && this[ entity ].length ) {
			return Object.keys( this[ entity ][ 0 ] ).map( header => header.charAt( 0 ).toUpperCase() + header.slice( 1 ) );
		}
	},

	/** Gets data based on the product */
	getData: function ( entities, product ) {
		return this[ entities.trim().toLowerCase() ].filter( entity => entity.product.toLowerCase().includes( product.trim().toLowerCase() ) );
	}
} )