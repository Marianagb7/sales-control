import { Router } from "express";
import *as salesCtrl from '../controllers/sales.controller';

const router = Router()

router.post('/', salesCtrl.createSale)

router.get('/', salesCtrl.getSales)

router.get('/:saleId', salesCtrl.getSaleById)
router.get('/search/:query', salesCtrl.searchSalecode)
router.get('/search2/:query', salesCtrl.searchIdentification)


router.put('/:saleId', salesCtrl.updateSaleById)

router.delete('/:saleId', salesCtrl.deleteSaleById)











export default router;