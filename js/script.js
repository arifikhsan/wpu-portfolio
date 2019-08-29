// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elementTujuan = $(tujuan);
  // pindahkan scroll
  $('body').scrollTop(elementTujuan.offset().top);

  e.preventDefault();
});
 