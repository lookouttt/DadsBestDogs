let contactModal = `
<div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Contact Us</h3>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                        <label for="contactFirstName">First name</label>
                        <input type="text" class="form-control" id="contactFirstName" placeholder="First name" required>
                        </div>
                        <div class="col-md-4 mb-3">
                        <label for="contactLastName">Last name</label>
                        <input type="text" class="form-control" id="contactLastName" placeholder="Last name" required>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col mb-3">
                            <label for="contactEmail">Email address</label>
                            <input type="email" class="form-control" id="contactEmail" placeholder="Enter email" required>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col mb-3">
                            <label for="contactTopic">Topic</label>
                            <select class="form-control" id="contactTopic" required>
                                <option selected>Choose...</option>
                                <option>Chart Question</option>
                                <option>Chart Discrepancy</option>
                                <option>Feature Request</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col mb-3">
                            <label for="contactDetails">Tell us what you're contacting us about</label>
                            <textarea class="form-control" id="contactDetails" rows="3" required></textarea>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`