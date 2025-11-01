const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadShcema } = require('./schema');

const NotesValdator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadShcema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValdator;
