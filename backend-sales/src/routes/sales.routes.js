import { Router } from 'express';
import *as salesCtrl from '../controllers/sales.controller';
const router = Router()

router.post('/', salesCtrl.createSale)

router.get('/', salesCtrl.getSales)

router.get('/:saleId', salesCtrl.getSaleById)
router.get('/codesale/:query', salesCtrl.searchSalecode)
router.get('/customer/:query', salesCtrl.searchCustomer)



router.put('/:saleId', salesCtrl.updateSaleById)

router.delete('/:saleId', salesCtrl.deleteSaleById)

export default router;