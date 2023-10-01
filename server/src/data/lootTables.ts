export interface WeightedLoot { item: string, count?: number, weight: number }
export interface WeightedTier { tier: string, weight: number }
export type WeightedItem = WeightedLoot | WeightedTier;
export interface LootTable { min: number, max: number, loot: WeightedItem[] }

export const LootTables: Record<string, LootTable> = {
    ground_loot: {
        min: 1,
        max: 1,
        loot: [
            { tier: "equipment", weight: 0.9 },
            { tier: "scopes", weight: 0.3 },
            { tier: "healing_items", weight: 0.9 },
            { tier: "ammo", weight: 0.2 },
            { tier: "guns", weight: 0.9 }
        ]
    },
    regular_crate: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "equipment", weight: 1 },
            { tier: "scopes", weight: 0.3 },
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 0.2 },
            { tier: "melee", weight: 0.04 }
        ]
    },
    aegis_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
    flint_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
	flint_stone: {
        min: 1,
        max: 1,
        loot: [
			{ item: "30x_scope", weight: 1 }
        ]
    },
    melee_crate: {
        min: 2,
        max: 2,
        loot: [
            { tier: "melee", weight: 1 }
        ]
    },
    gold_rock: {
        min: 1,
        max: 1,
        loot: [
            { item: "tango_51", weight: 1 }
        ]
    },
    blueberry_bush: {
        min: 1,
        max: 1,
        loot: [
            { tier: "equipment", weight: 1 },
            { tier: "healing_items", weight: 1 },
            { tier: "scopes", weight: 1 }
        ]
    },
    warehouse: {
        min: 1,
        max: 1,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_scopes", weight: 0.25 },
            { tier: "special_equipment", weight: 0.65 }
        ]
    },
    hunting: {
        min: 1,
        max: 1,
        loot: [
            { tier: "4x_scope", weight: 1 },
            { tier: "8x_scope", weight: 0.25 },
            { tier: "15x_scope", weight: 0.65 },
            { tier: "30x_scope", weight: 0.01 }			
        ]
    },	
    large_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1 },
            { tier: "equipment", weight: 0.65 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    small_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 0.8 },
            { tier: "ammo", weight: 1 }
        ]
    },
    small_table: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 1 }
        ]
    },
    box: {
        min: 1,
        max: 1,
        loot: [
            { tier: "ammo", weight: 0.6 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 1 },
            { tier: "guns", weight: 0.7 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    bookshelf: {
        min: 1,
        max: 2,
        loot: [
            { tier: "equipment", weight: 1.1 },
            { tier: "scopes", weight: 0.4 },
            { tier: "guns", weight: 1 },
            { tier: "healing_items", weight: 0.6 }
        ]
    },
    fridge: {
        min: 2,
        max: 3,
        loot: [
            { item: "cola", weight: 1 }
        ]
    },
    washing_machine: {
        min: 1,
        max: 1,
        loot: [
            { item: "hazel_jumpsuit", weight: 1 },
            { item: "verified", weight: 0.2 },
            { item: "nokilpls", weight: 0.1 },
            { item: "basic_outfit", weight: 0.0001 }
        ]
    },
    toilet: {
        min: 2,
        max: 3,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 0.1 },
            { tier: "guns", weight: 0.05 }
        ]
    },
    used_toilet: {
        min: 2,
        max: 3,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "equipment", weight: 1 },
            { tier: "scopes", weight: 0.35 },
            { tier: "special_guns", weight: 0.8 },
            { tier: "healing_items", weight: 0.75 }
        ]
    },
    porta_potty_toilet_open: {
        min: 2,
        max: 3,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 0.9 },
            { tier: "special_guns", weight: 0.8 },
            { tier: "special_scopes", weight: 0.35 }
        ]
    },
    porta_potty_toilet_closed: {
        min: 2,
        max: 3,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 0.1 },
            { tier: "guns", weight: 0.05 }
        ]
    },
    gun_mount: {
        min: 1,
        max: 1,
        loot: [
            { item: "mcx_spear", weight: 1 }
        ]
	},	
    gun_mount_blr: {
        min: 1,
        max: 1,
        loot: [
            { item: "blr", weight: 1 }
        ]
	},		
    gun_mount_mosin: {
        min: 1,
        max: 1,
        loot: [
            { item: "mosin", weight: 1 }
        ]
	},
    gun_mount_tango: {
        min: 1,
        max: 1,
        loot: [
            { item: "tango_51", weight: 1 }
        ]
	},		
};

export const LootTiers: Record<string, WeightedLoot[]> = {
    guns: [
        { item: "g19", weight: 1 },
        { item: "mp40", weight: 1.0 },
        { item: "saf_200", weight: 1.5 },
        { item: "micro_uzi", weight: 1.25 },
        { item: "mcx_spear", weight: 0.1 },
        { item: "sr25", weight: 0.5 },
		{ item: "L86A2", weight: 0.3 },
		{ item: "svd", weight: 0.3 },
        { item: "mini14", weight: 0.5 },
        { item: "vss", weight: 0.55},
		{ item: "blr", weight: 0.5 },
        { item: "mosin", weight: 0.35 },
        { item: "tango_51", weight: 0.1 }
    ],
    healing_items: [
        { item: "gauze", weight: 3, count: 5 },
        { item: "cola", weight: 2 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 }
    ],
    scopes: [
        { item: "4x_scope", weight: 0.5 },
        { item: "8x_scope", weight: 0.1 },
        { item: "15x_scope", weight: 0.0025 }
    ],
    equipment: [
        { item: "hard_hat", weight: 1 },
        { item: "m1_helmet", weight: 0.3 },
        { item: "tactical_helmet", weight: 0.01 },

        { item: "basic_vest", weight: 1 },
        { item: "bulletproof_vest", weight: 0.3 },
        { item: "tactical_vest", weight: 0.01 },

        { item: "satchel", weight: 1 },
        { item: "regular_backpack", weight: 0.3 },
        { item: "tactical_backpack", weight: 0.01 }
    ],
    ammo: [
        { item: "556mm", count: 60, weight: 1 },
        { item: "762mm", count: 60, weight: 1 },
        { item: "9mm", count: 60, weight: 1 }
    ],
    special_guns: [
        { item: "micro_uzi", weight: 0.50 },
        { item: "mp40", weight: 0.50 },
        { item: "saf_200", weight: 0.50 },
        { item: "vss", weight: 0.59 },
        { item: "g19", weight: 0.000000001 },
        { item: "sr25", weight: 0.69 },    	
		{ item: "svd", weight: 0.5 },
		{ item: "L86A2", weight: 0.5 },
        { item: "mini14", weight: 0.69 },
        { item: "mcx_spear", weight: 0.29 },
        { item: "mosin", weight: 0.5 },
        { item: "tango_51", weight: 0.05 }
    ],
    special_healing_items: [
        { item: "cola", weight: 3 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 },
        { item: "gauze", weight: 3 }
    ],
    special_scopes: [
        { item: "4x_scope", weight: 0.45 },
        { item: "8x_scope", weight: 0.1 },
        { item: "15x_scope", weight: 0.05 }
    ],
    special_equipment: [
        { item: "hard_hat", weight: 1 },
        { item: "m1_helmet", weight: 0.5 },
        { item: "tactical_helmet", weight: 0.15 },

        { item: "basic_vest", weight: 1 },
        { item: "bulletproof_vest", weight: 0.5 },
        { item: "tactical_vest", weight: 0.15 },

        { item: "satchel", weight: 1 },
        { item: "regular_backpack", weight: 0.5 },
        { item: "tactical_backpack", weight: 0.15 }
    ],
    melee: [
        { item: "baseball_bat", weight: 4 },
        { item: "kbar", weight: 2.5 }
    ]
};
