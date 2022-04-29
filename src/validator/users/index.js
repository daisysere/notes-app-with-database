// fungsi validator dengan menerapkan schema yng telah dibuat
const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UserValidator = {
  // fungsi untuk memvalidasi data payload (dari parameternya)
  // jika tidak sesuai schema, maka error
  validateUserPayload: (payload) => {
    const validationResult = UserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UserValidator;
