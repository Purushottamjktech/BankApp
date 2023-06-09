const customer_documentDb = require("../database/customer_document_db");

module.exports.addCustomer_document = async (data) => {
  try {
    let result = await customer_documentDb.customer_document_create(data);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/addCustomer_document: ${error}`);
  }
};

module.exports.getCustomerDocument = async () => {
  try {
    const result = await customer_documentDb.getCustomer_document();
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/getCustomerDocument: ${error}`);
  }
};

module.exports.getCustomerInfoBydocument_masterId = async (
  document_masterId
) => {
  try {
    const result =
      await customer_documentDb.getCustomerInfoWithdocument_masterid(
        document_masterId
      );
    return result;
  } catch (error) {
    console.log(
      `Got Some errors from services/getCustomerInfoBydocument_masterId: ${error}`
    );
  }
};
