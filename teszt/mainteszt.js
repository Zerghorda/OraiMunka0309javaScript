QUnit.module("léptetés metódus tesztelés", function () {
  QUnit.test("Létezik a metodus?", function (assert) {
    assert.ok(leptetes(leptetes), "létezik a lépetetés");
  });
  QUnit.test("leptetes(1,2)", function (assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("leptetes(1,0)", function (assert) {
    assert.equal(leptetes(1, 0), 1);
  });
  QUnit.test("leptetes(1,hossz -1)", function (assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("leptetes(-1,2)", function (assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("leptetes(-1,0)", function (assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("leptetes(1,2)", function (assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
});
QUnit.module("osszeallit metódus tesztelése", function () {
  QUnit.test("Létezik a metodus?", function (assert) {
    assert.ok(osszealit, "létezik a osszeálit");
  });
  QUnit.test("teljes lista", function (assert) {
    lista = [
      "kepek/alszik.jpg",
      "kepek/bocsok.jpg",
      "kepek/cirkusz.jpg",
      "kepek/eszik.jpg",
      "kepek/integet.jpg",
      "kepek/maci.jpg",
      "kepek/medve.jpg",
      "kepek/taj.jpg",
    ];
    assert.equal(
      osszealit(),
      '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div><div><img src="kepek/eszik.jpg" alt=""></div><div><img src="kepek/integet.jpg" alt=""></div><div><img src="kepek/maci.jpg" alt=""></div><div><img src="kepek/medve.jpg" alt=""></div><div><img src="kepek/taj.jpg" alt=""></div>'
    );
  });
  QUnit.test("egy elemú liesta", function (assert) {
    lista = ["kepek/alszik.jpg"];
    assert.equal(osszealit(), '<div><img src="kepek/alszik.jpg" alt=""></div>');
  });
});
