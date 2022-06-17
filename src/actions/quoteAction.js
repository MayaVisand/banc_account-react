export const PUT_QUOTE = 'PUT_QUATE'

export const putQuoteAction = quote =>
    (
        {
            type: PUT_QUOTE,
            payload: quote
        }
    )