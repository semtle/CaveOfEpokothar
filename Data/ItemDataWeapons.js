kItemsData.weapons = {
	// Melee weapons (may also be thrown)
//	broadsword: {
//		displayName: $L("Broadsword"),
//		type: "broadsword", category:"weapons", slot:"weapon", skill: "sword", attackActions: "sword", weight:6, value:25,/*gp*/
//		hands:1, accuracy:8, damageMin:2, damageRnd:7, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
//		img: "tiles/player/hand1/broadsword.gif",
//		description: $L("A heavy double-edged sword.")
//	},
	club: {
		displayName: $L("Club"),
		type: "club", category:"weapons", slot:"weapon", skill: "club", attackActions: "blunt", weight:3, value:0.1,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:5, meleeReach:1, rangeReach:8, rangeAccuracy:2,
		img: "tiles/player/hand1/club_slant.gif",
		description: $L("A piece of wood.")
	},
	dagger: {
		displayName: $L("Dagger"),
		type: "dagger", category:"weapons", slot:"weapon", skill: "dagger", attackActions: "dagger", weight:1, value:2,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:3, meleeReach:1, rangeReach:8, rangeAccuracy:2,
		img: "tiles/player/hand1/dagger.gif",
		description: $L("A fighting knife with a sharp point for thrusting or stabbing.")
	},
	greataxe: {
		displayName: $L("Great Axe"),
		type: "greataxe", category:"weapons", slot:"weapon", skill: "axe", attackActions: "axe", weight:12, value:20,/*gp*/
		hands:2, accuracy:7, damageMin:1, damageRnd:11, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/great_axe.gif",
		description: $L("A huge axe that requires two hands to swing.")
	},
	greatsword: {
		displayName: $L("Greatsword"),
		type: "greatsword", category:"weapons", slot:"weapon", skill: "sword", attackActions: "sword", weight:8, value:45,/*gp*/
		hands:2, accuracy:8, damageMin:2, damageRnd:9, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/great_sword.gif",
		description: $L("A large, heavy sword that requires two hands to wield.")
	},
	handaxe: {
		displayName: $L("Handaxe"),
		type: "handaxe", category:"weapons", slot:"weapon", skill: "axe", attackActions: "axe", weight:3, value:8,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:5, meleeReach:1, rangeReach:8, rangeAccuracy:2,
		img: "tiles/player/hand1/hand_axe.gif",
		description: $L("A small axe used for chopping wood or foes.")
	},	
	heavymace: {
		displayName: $L("Heavy Mace"),
		type: "heavymace", category:"weapons", slot:"weapon", skill: "mace", attackActions: "blunt", weight:8, value:12,/*gp*/
		hands:2, accuracy:7, damageMin:1, damageRnd:7, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/mace3.gif",
		description: $L("Like a two-handed war hammer, but the head is radially symmetric so you don't have to worry about the orientation of the head.")
	},
	longsword: {
		displayName: $L("Longsword"),
		type: "longsword", category:"weapons", slot:"weapon", skill: "sword", attackActions: "sword", weight:4, value:15,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:7, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/long_sword.gif",
		description: $L("A double-edged sword about 3 feet long.")
	},
	mace: {
		displayName: $L("Mace"),
		type: "mace", category:"weapons", slot:"weapon", skill: "mace", attackActions: "blunt", weight:4, value:5,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:5, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/mace.gif",
		description: $L("Like a military hammer, but the head is radially symmetric so you don't have to worry about the orientation of the head.")
	},
	quarterstaff: {
		displayName: $L("Quarterstaff"),
		type: "quarterstaff", category:"weapons", slot:"weapon", skill: "staff", attackActions: "blunt", weight:4, value:5,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:5, meleeReach:2, rangeReach:-1, rangeAccuracy:1, block:2,
		img: "tiles/player/hand1/quarterstaff1.gif",
		description: $L("A 6 foot long shaft of hardwood with metal ends.")
	},
	shortsword: {
		displayName: $L("Short Sword"),
		type: "shortsword", category:"weapons", slot:"weapon", skill: "sword", attackActions: "sword", weight:2, value:10,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:5, meleeReach:1, rangeReach:6, rangeAccuracy:1,
		img: "tiles/player/hand1/short_sword.gif",
		description: $L("A pointed and edged sword 2 feet long.")
	},
	spear: {
		displayName: $L("Spear"),
		type: "spear", category:"weapons", slot:"weapon", skill: "spear", attackActions: "pierce", weight:6, value:2,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:7, meleeReach:2, rangeReach:16, rangeAccuracy:4,
		img: "tiles/player/hand1/spear1.gif",
		description: $L("A pole weapon consisting of a wood shaft with a pointed head. A spear can be thrown.")
	},
	trident: {
		displayName: $L("Trident"),
		type: "trident", category:"weapons", slot:"weapon", skill: "spear", attackActions: "pierce", weight:5, value:15,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:8, meleeReach:2, rangeReach:12, rangeAccuracy:3,
		img: "tiles/player/hand1/trident2.gif",
		description: $L("A trident has three tines at then end of a wooden shaft. It can be thrown, although it is not aerodynamic.")
	},
	waraxe: {
		displayName: $L("Battleaxe"),
		type: "waraxe", category:"weapons", slot:"weapon", skill: "axe", attackActions: "axe", weight:6, value:10,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:7, meleeReach:1, rangeReach:-1, rangeAccuracy:1,
		img: "tiles/player/hand1/war_axe.gif",
		description: $L("An axe designed for combat.")
	},
	
	// Ranged weapons
	crossbow: {
		displayName: $L("Crossbow"),
		type: "crossbow", category:"weapons", slot:"weapon", skill: "crossbow", ammo: true, attackActions: "pierce", weight:6, value:50,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:7, meleeReach:-1, rangeReach:20, rangeAccuracy:8,
		img: "tiles/player/hand1/crossbow2.gif",
		description: $L("A crossbow for shooting arrows.")
	},
	heavycrossbow: {
		displayName: $L("Heavy Crossbow"),
		type: "heavycrossbow", category:"weapons", slot:"weapon", skill: "crossbow", ammo: true, attackActions: "pierce", weight:10, value:75,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:9, meleeReach:-1, rangeReach:20, rangeAccuracy:12,
		img: "tiles/player/hand1/crossbow2.gif",
		description: $L("A crossbow for shooting arrows.")
	},
	longbow: {
		displayName: $L("Longbow"),
		type: "longbow", category:"weapons", slot:"weapon", skill: "bow", ammo: true, attackActions: "pierce", weight:3, value:75,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:7, meleeReach:-1, rangeReach:20, rangeAccuracy:8,
		img: "tiles/player/hand1/bow3.gif",
		description: $L("A bow for shooting arrows.")
	},
	shortbow: {
		displayName: $L("Shortbow"),
		type: "shortbow", category:"weapons", slot:"weapon", skill: "bow", ammo: true, attackActions: "pierce", weight:2, value:30,/*gp*/
		hands:2, accuracy:8, damageMin:1, damageRnd:5, meleeReach:-1, rangeReach:16, rangeAccuracy:8,
		img: "tiles/player/hand1/bow_short.gif",
		description: $L("A bow for shooting arrows.")
	},
	sling: {
		displayName: $L("Sling"),
		type: "sling", category:"weapons", slot:"weapon", skill: "sling", ammo: true, attackActions: "bludgeon", weight:1, value:1,/*gp*/
		hands:1, accuracy:8, damageMin:1, damageRnd:3, meleeReach:-1, rangeReach:16, rangeAccuracy:7,
		img: "tiles/player/hand1/sling.gif",
		description: $L("A sling can fling small stones fast enough to kill.")
	}
};

//Intrinisic attacks
//The following are intrinsic weapons so they must not be enumerable
Object.defineProperty(kItemsData.weapons, 
	"fist", {
	enumerable: false,
	value: {
		displayName: $L("Fist"),
		type: "fist", category:"weapons", slot:"weapon", attackActions: "hand", weight:0, 
		hands:0, accuracy:8, damageMin:1, damageRnd:2, meleeReach:1
	}
});

Object.defineProperty(kItemsData.weapons, 
	"foot", {
	enumerable: false,
	value: {
		displayName: $L("Foot"),
		type: "foot", category:"weapons", slot:"weapon", attackActions: "foot", weight:0, 
		hands:0, accuracy:8, damageMin:1, damageRnd:3, meleeReach:1
	}
});

Object.defineProperty(kItemsData.weapons, 
	"bitesmall", {
	enumerable: false,
	value: {
		displayName: $L("Bite"),
		type: "bitesmall", category:"weapons", slot:"weapon", attackActions: "bite", weight:0, 
		hands:0, accuracy:8, damageMin:1, damageRnd:2, meleeReach:1
	}
});

Object.defineProperty(kItemsData.weapons, 
	"bitemedium", {
	enumerable: false,
	value: {
		displayName: $L("Bite"),
		type: "bitemedium", category:"weapons", slot:"weapon", attackActions: "bite", weight:0, 
		hands:0, accuracy:8, damageMin:1, damageRnd:3, meleeReach:1
	}
});

Object.defineProperty(kItemsData.weapons, 
	"bitelarge", {
	enumerable: false,
	value: {
		displayName: $L("Bite"),
		type: "bitelarge", category:"weapons", slot:"weapon", attackActions: "bite", weight:0, 
		hands:0, accuracy:8, damageMin:1, damageRnd:5, meleeReach:1
	}
});

Object.defineProperty(kItemsData.weapons, 
	"bludgeonlarge", {
	enumerable: false,
	value: {
		displayName: $L("Bludgeon"),
		type: "bludgeonlarge", category:"weapons", slot:"weapon", attackActions: "blunt", weight:0, 
		hands:0, accuracy:8, damageMin:2, damageRnd:9, meleeReach:1
	}
});
