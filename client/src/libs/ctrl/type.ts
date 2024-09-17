const TypeSchema = {
    0: "F32",
    1: "F64",
    2: "I32",
    3: "I64",
    4: "STRING",
    undefined: "OTHER",
};

export const typeToString = (type: number | undefined) => {
    return TypeSchema[(type || "undefined") as keyof typeof TypeSchema] as
        | "F32"
        | "F64"
        | "I32"
        | "I64"
        | "STRING"
        | "OTHER";
};
