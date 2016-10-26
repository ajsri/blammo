module.exports = {
		safe: {
			ammo: 'select ammo.id, ammo.quantity, ammo.price, manufacturer.name, caliber.shortName from ammo inner join manufacturer on manufacturer.id = ammo.manufacturerId inner join caliber on ammo.caliberId = caliber.id ORDER BY id',
			ammoCountByCaliber: 'select SUM(ammo.quantity) as quantity, caliber.shortName, caliber.longName from ammo inner join caliber on ammo.caliberId = caliber.caliberId group by caliber.caliberId',
			gunsList: 'select weapon.id, manufacturer.name as manufacturer, model.name, caliber.shortName as caliber, weapon.serial from weapon inner join model on model.id = weapon.id inner join manufacturer on model.manufacturerId = manufacturer.id inner join caliber on caliber.caliberId = model.caliberId order by weapon.id',
			gunInfo: 'select weapon.id, manufacturer.name as manufacturer, model.name, caliber.shortName as caliber, weapon.serial from weapon inner join model on model.id = weapon.id inner join manufacturer on model.manufacturerId = manufacturer.id inner join caliber on caliber.caliberId = model.caliberId WHERE weapon.id = ',
			brassCount: 'select brass.id, caliber.shortName, brass.quantity from brass inner join caliber on brass.caliberId = caliber.caliberId'
		}
}