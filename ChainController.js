class ChainController {

    constructor(app, blockchainObj) {
        this.app = app;
        this.blockchain = blockchainObj;
        this.validateChain();
        this.chainHeight();
    }

    validateChain() {
        this.app.get('/chain/validate', async (req, res) => {
            const errors = await this.blockchain.validateChain();

            return res.status(200).json(errors);
        });
    }

    chainHeight() {
        this.app.get('/chain/height', async (req, res) => {
            const height = await this.blockchain.getChainHeight();

            return res.status(200).json(height);
        });
    }
}

module.exports = (app, blockchainObj) => new ChainController(app, blockchainObj);