const StatusSchema = {
    0: "Success",
    1: "InvalidSecScheme",
    2: "InvalidProto",
    3: "TooManySessions",
    4: "InvalidArgument",
    5: "InternalError",
    6: "CryptoError",
    7: "InvalidSession",
    undefined: "Failed",
};

export const statusToString = (
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
) => {
    return StatusSchema[
        (status || "undefined") as keyof typeof StatusSchema
    ] as
        | "Success"
        | "InvalidSecScheme"
        | "InvalidProto"
        | "TooManySessions"
        | "InvalidArgument"
        | "InternalError"
        | "CryptoError"
        | "InvalidSession"
        | "Failed";
};
