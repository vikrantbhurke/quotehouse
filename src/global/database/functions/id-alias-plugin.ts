import { Schema, SchemaOptions } from "mongoose";

export function idAliasPlugin(schema: Schema<any>): void {
  schema.virtual("id").get(function (this: { _id: any }) {
    if (this._id && typeof this._id.toHexString === "function") {
      return this._id.toHexString();
    }
    return this._id?.toString?.() ?? this._id;
  });

  const transformFn = (_doc: unknown, ret: Record<string, unknown>) => {
    if ("_id" in ret) delete ret._id;
    if ("__v" in ret) delete ret.__v;
  };

  const toJSON: SchemaOptions["toJSON"] = {
    virtuals: true,
    versionKey: false,
    transform: transformFn,
  };

  const toObject: SchemaOptions["toObject"] = {
    virtuals: true,
    versionKey: false,
    transform: transformFn,
  };

  (schema as any).set("toJSON", toJSON);
  (schema as any).set("toObject", toObject);
}
