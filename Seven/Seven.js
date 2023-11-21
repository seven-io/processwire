$(function () {
    $('#ProcessPageEdit').submit(function(e) {
        if ('seven_sms_user' !== this.elements.namedItem('_after_submit_action').value)
            return;

        e.preventDefault();

        var $text = this.elements.namedItem('seven_text');
        $text.value = prompt(ProcessWire.config.Seven.prompt_text);

        if ($text.value) this.submit();
        else alert(ProcessWire.config.Seven.text_missing);
    });
});
