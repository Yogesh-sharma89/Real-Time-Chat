

declare global {
    namespace Express{
        interface Request{
            userId?:string,
            isMalwareDetected?:boolean
        }
    }
}

export {};