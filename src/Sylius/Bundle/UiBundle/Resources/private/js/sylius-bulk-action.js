/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        bulkActionUrl: function() {
            return this.each(function() {
                return $(this).on('click', function(event) {
                    event.preventDefault();

                    var url = $(this).attr('href');

                    var ids = $('input.bulk-select-checkbox:checked').map(function() {
                        return this.value;
                    }).get();

                    $('#confirmation-button').attr('href', [url, '?', $.param({ids: ids})].join(''));

                    return $('#confirmation-modal').modal('show');
                });
            });
        }
    });
})( jQuery );
