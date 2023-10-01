import { SendingPacket } from "../../types/sendingPacket";

import { type SuroiBitStream } from "../../../../common/src/utils/suroiBitStream";
import { type ObjectCategory, PacketType } from "../../../../common/src/constants";
import { type ObjectType } from "../../../../common/src/utils/objectType";
import { type Player } from "../../objects/player";
import { type LootDefinition } from "../../../../common/src/definitions/loots";

export class PickupPacket extends SendingPacket {
    override readonly allocBytes = 3;
    override readonly type = PacketType.Pickup;
    readonly itemType: ObjectType<ObjectCategory.Loot, LootDefinition>;

    constructor(player: Player, itemType: ObjectType<ObjectCategory.Loot, LootDefinition>) {
        super(player);
        this.itemType = itemType;
    }

    override serialize(stream: SuroiBitStream): void {
        super.serialize(stream);
        stream.writeObjectTypeNoCategory(this.itemType);
    }
}
