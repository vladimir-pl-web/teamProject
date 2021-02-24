//CARDS PACKS
//GET /cards/pack
export type CardPackType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}
type GetCardsPackResponseType = {
    cardPacks: Array<CardPackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
type GetCardsPackRequestPayload = {
    packName?: string
    min?: string
    max?: string
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
}

//POST /cards/pack
type PostCardsPackResponseType = {
    newCardsPack: {}
}
type PostCardsPackRequestPayloadType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}

//DELETE /cards/pack
type DeleteCardsResponseType = {
    deletedCardsPack: {}
}
type DeleteCardsPackRequestPayloadType = {
    id: string
}

//PUT /cards/pack
type UpdateCardsPackResponseType = {
    updatedCardsPack: {}
}
type UpdateCardsPackRequestPayloadType = {
    _id: string
    name?: string
}

//CARDS IN PACK
//GET /cards/card
type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}
type GetCardsResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
type GetCardsRequestPayloadType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

//POST /cards/card
type PostCardResponseType = {
    newCard: {}
}
type PostCardRequestPayloadType = {
    card: {
        cardsPack_id: string,
        question?: string
        answer?: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type?: string
    }
}

//DELETE /cards/card
type DeleteCardResponseType = {
    deletedCard: {}
}
type DeleteCardRequestPayloadType = {
    id: string
}

//PUT /cards/card
type UpdateCardResponseType = {
    updatedCard: {}
}
type UpdateCardRequestPayloadType = {
    card: {
        _id: string
        question?: string
        comments?: string
    }
}

export type SendGradeResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}
