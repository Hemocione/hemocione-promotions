import { defineEventHandler, createError, getRequestHeader } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const secret = getQuery(event)["x-secret"]
    if (!secret || secret !== config.secret) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Credenciais inválidas.'
      }))
    }

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro interno do servidor.',
      cause: error
    })
  }
})