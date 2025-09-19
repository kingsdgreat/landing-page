import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PurchaseOptions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Escrow Close */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Escrow Close</h2>
          <p className="text-[#777777] max-w-2xl mx-auto">
            This method involves paying only a small deposit at checkout - typically a $500 Non-Refundable "Earnest
            Money Deposit" - and funding the remainder of the purchase through a title company at "close of escrow."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>What Properties Do We Recommend This For?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777]">Typically anything priced over $10,000.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777] mb-4">
                For the buyer seeking an extra degree of security in their purchase, this method involves employing a
                third-party intermediary to handle both the conveyance of the property as well as the disbursement of
                funds.
              </p>
              <p className="text-[#777777]">
                Additionally, this third party can provide title insurance which can be especially beneficial to anyone
                looking to either build on a lot or use the land as collateral against a loan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>How Does The Process Work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777] mb-4">
                After you have selected the property you want, and after you've made your deposit, we will start a
                semi-purchase agreement which we will email you to sign. Once you have signed the contract, we will
                submit it to a title company where they will begin the process of investigating title history and
                ensuring the land.
              </p>
              <p className="text-[#777777]">
                After they have completed their work, they will request the remaining funds from you and, once signed
                and submitted the new deed to the title company, will they record the property into your name and
                release your money to us.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drawbacks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777] mb-4">
                This method involves the title company and insurance title insurance, means that you will also take on
                the added cost of paying the title company. This can range anywhere from $750-$2,000 depending on the
                state that the land is in.
              </p>
              <p className="text-[#777777]">
                These costs will be the responsibility of you, the buyer. Additionally, title companies do not work
                quickly and will normally take a month or more to complete the process, so expect your future land
                transfer the property into your name.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Purchasing On Terms */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl font-bold text-primary mb-4">Purchasing On "Terms"</h2>
          <p className="text-[#777777] max-w-2xl mx-auto">
            This method is not something we can offer on every property, but when we can offer it, this process involves
            purchasing a property slowly over time with a more manageable down payment and affordable monthly
            installments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>What Properties Do We Recommend This For?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777]">
                While this is not something we can offer on every property, the best where this option is offered will
                be clearly indicated on their individual listing pages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777]">
                This method allows the buyer who can not afford the entire purchase price of the property to work
                comfortably, manage paying for the land over time while paying for other costs needed to develop it.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>How Does The Process Work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777] mb-4">
                Once you make the down payment you will be emailed a receipt. Within 24 hours we will draft a land
                contract which we will email you to sign. This will be the document which demonstrates your equitable
                interest in the property until such a time as you paid for the land in full.
              </p>
              <p className="text-[#777777]">
                The card you used at checkout will be automatically billed each month until such a time as the remaining
                balance has been paid. Only once all the payments have been made will we deed the property into your
                name.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drawbacks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#777777]">
                As with a home or car loan, paying for the property slowly over a longer period of time will cause the
                buyer to pay more than if they had purchased it in full.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
